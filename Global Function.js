export const globalLinks = (idCode) =>{
  let idCod = idCode.replace('-','').toLowerCase();
  return globalObj = {
  "Jav GG": `https://javgg.me/?s=${idCode}`,
  "Arc Jav" : `https://arcjav.com/?s=${idCode}`,  
  "Jav Trailer": `https://javtrailers.com/search/${idCode}`,
  "SX TB" : `https://sextb.net/search/${idCode}`,
  "Jav Lib": `http://www.javlibrary.com/en/vl_searchbyid.php?keyword=${idCode}`,
  "Jav Sub": `https://myjavsub.blogspot.com/search?q==${idCode}`,
  "FF Jav": `https://ffjav.com/?s=${idCode}`,
  "One Jav": `https://onejav.com/torrent/${idCod}`,
  "HP Jav": `https://hpjav.tv?s=${idCode}`,
  "R18" : `https://www.r18.com/common/search/searchword=${idCode}/`
  }
}
     