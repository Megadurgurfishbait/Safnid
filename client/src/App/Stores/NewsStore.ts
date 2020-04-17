import { observable, action, runInAction, computed, configure } from "mobx";
import moment from 'moment';
import { INews } from "../Models/News";
import Agent from "../Api/agent";
import { RootStore } from "./rootStore";
configure({ enforceActions: "always" });

export default class NewsStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
      this.rootStore = rootStore;
  }


  @observable newsRegistry = new Map<string, INews>();
  @observable news: INews | null = null;
  @observable loadingInitial = false;


  @computed get getAllNews() {
    return Array.from(this.newsRegistry.values());
  }

  // Sækir allar fréttir.
  // Setur í NewsRegistry svo við getum sótt þær síðar.

  // @action loadNews = async () => {
  //     this.loadingInitial = true;
  //     try {
  //         const newsArray = await Agent.News.list();

  //         runInAction('Loading News', () => {
  //             newsArray.forEach((news) => {
  //                 console.log(news);
  //                 this.newsRegistry.set(news.id, news);
  //             });
  //             this.loadingInitial = false;
  //         })
  //     }
  //     catch(err){
  //         console.log(err);
  //     }
  // }

  // Fyrir SingleNews, Sidebar.
  @computed get LastFourNews() {
    if(this.newsRegistry.size < 2) {
      this.loadNews();
    }
    return Array.from(this.newsRegistry.values()).slice(this.newsRegistry.size-6, this.newsRegistry.size-1).reverse();
  }

  // FYRIR FILESYSTEM GET ALL
  // Session Based Load.
  // Fyrir: NewsRegistry Tómt
  // Virkni: Ef það eru fréttir í Session skila þeim.
  //        Annars sækja úr DB.
  // Eftir: NewsRegistry stúttfullt af fréttum.
  @action loadNews = async () => {
    this.loadingInitial = true;
    if(this.getFromSession()){
      var NewsFromSession = sessionStorage.getItem("News");
      var ParsedNews = JSON.parse(NewsFromSession!);
      this.newsToNewsRegistry(ParsedNews);
      this.loadingInitial = false;
    } else {
      try {
        let newsArray: INews[] = await Agent.News.List();
        runInAction("Loading News", () => {
          this.newsToNewsRegistry(newsArray);
          this.loadingInitial = false;
          sessionStorage.setItem("News", JSON.stringify(newsArray));
        });
      } catch (err) {
        runInAction(() => {
          this.loadingInitial = false;
        });
      }
    }
  };

    
  // Tekur úr session eða DB og setur inn NewsRegistry
  newsToNewsRegistry = (newsArray:INews[]) => {   
      newsArray.forEach(news => {
        var formatDate = news?.post_date.slice(0, 11);
        news.formattedPostDate = moment(formatDate).locale("is").format("DD MMM");
        news.year = moment(formatDate).format("YYYY")
        this.newsRegistry.set(news.post_id, news);
      });
  }


  // LoadSingleNews.
  // Fyrir: this.news tómt eða með gamalli frétt.
  // Virkni: Skoðar ef að það er eh í Session.
  // Ef getFromSession:        
  //  True: sækir frétt úr NewsRegistry.
  //  false: Sækir frétt úr db.
  // Eftir: NewsRegistry stúttfullt af fréttum.
  @action loadSingleNews = async (id: string) => {
    this.loadingInitial = true;
    if(this.getFromSession()){
      this.news = this.getSingleNews(id);
      this.loadingInitial = false;
    } else {
      try {
        let news:INews = await Agent.News.Single(id);
        runInAction(() => {
          this.news = news!;
          this.newsRegistry.set(news.post_id, news);
          this.loadingInitial = false;
        });
      } catch (err) {
        runInAction(() => {
          this.loadingInitial = false;
        });
        console.log(err);
      }
    }
  };

  @action clearNews = () => {
    this.news = null;
  };


  // Skilar úr INews Object 
  getSingleNews = (id: string): INews => {
    return this.newsRegistry.get(id)!;
  };

  // getFromSession(): Skilar: True | False;
  // Ef fréttir í Session, keyrir þær í newsRegistry og skilar true;
  // Annars skilar false
  getFromSession = () => {
    if (sessionStorage.getItem("News")) {
      let fetchNews = sessionStorage.getItem('News');
      let parseNews = JSON.parse(fetchNews!);
      this.newsToNewsRegistry(parseNews);
      return true
    }else {
      return false;
    }
  }


}


