enum PostStatus {
  Unpublished,
  Published,
  Draft,
}
interface Post {
  title:string,
  content?:string,
  status:PostStatus,
}
let post:Post = {
  title:'过五关斩六将，去了鹅厂',
  status:2,
  content:'春招以来,我的面试时这样。。这样。。。'
}

console.log(post);
console.log(PostStatus[0]);