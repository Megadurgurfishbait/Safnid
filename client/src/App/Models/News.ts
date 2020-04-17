// TODO: Þetta er object fyrir Filesystem call.

export interface INews {
  id?: string;
  title: string;
  text?: string;
  post_date: string;
  formattedPostDate: string;
  post_id: string;
  year?: string;
  images: string[];
}

// TODO: Þetta er object fyrir Firebase call;

// export interface INews {
//     id: string,
//     title: string,
//     text?: string,
//     post_date: string
// }
