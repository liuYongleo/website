
function ajax(){
  let promise = new Promise(function(resolve, reject){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4){
        if(xhr.status == 200){
          resolve(xhr.response);
        }else{
          reject(xhr);
        }
      }
    }
    xhr.open('GET', 'http://www.leoyoung.top/addData.php');
    xhr.send();
  });
  return promise;  
}
export default ajax;