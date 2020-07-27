import fetchJsonp from 'fetch-jsonp';


const getUrl = (tab, search, count = 40) => {
  const pre = 'http://sas.qq.com/cgi-bin/db/data?';
  const table = `ke_coding_${tab}`;
  // const { page = 1, limit = 20 } = params;
  var tail;
  switch (tab) {
    case "movie":
      tail = 'title,rating%7Bmax,average,stars,min,details%7Bscore_1,score_2,score_3,score_4,score_5%7D%7D,genres,casts%7Balt,avatars%7Bsmall,large,medium%7D,name,name_en,id%7D,durations,mainland_pubdate,pubdates,has_video,collect_count,original_title,subtype,directors%7Balt,avatars%7Bsmall,large,medium%7D,name,id%7D,year,images%7Bsmall,large,medium%7D,alt%7D%7D'
      break;
    case "music":
      tail = 'title,alt,rating%7Bmax,average,numRaters,min%7D,author%7Bname%7D,alt_title,image,tags%7Bcount,name%7D,mobile_link,attrs%7Bpublisher,singer,version,pubdate,title,media,tracks,discs%7D%7D%7D'
      break;
    case "book":
      tail = 'title,rating%7Bmax,numRaters,average,min%7D,subtitle,author,pubdate,tags%7Bcount,name,title%7D,origin_title,image,binding,translator,catalog,pages,images%7Bsmall,large,medium%7D,alt,publisher,isbn10,isbn13,url,alt_title,author_intro,summary,price,ebook_price,ebook_url,series%7Bid,title%7D%7D%7D'
      break;
    default:
      break;
  }
  const query = `(_page:1,_limit:${count},title:"${search}%25")`;
  return `${pre}t=%5B%22${table}%22%5D&q=%7B${table}${query}%7Bid,${tail}`
}

const get = (tab, search = '大', count) => {
  const url = getUrl(tab, search, count)
  console.log(url)
  const pro = fetchJsonp(url, { timeout: 5000 })
    .then(res => res.json())
    .then(data => data)
    .catch(err => err)
  return pro
}

export default get
