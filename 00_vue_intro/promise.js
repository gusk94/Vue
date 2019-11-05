// // 외부에 요청을 보내서 그 결과를 출력하는 코드 작성
// // 1. 몇초 뒤에 데이터가 응답되면
// // 2. 데이터를 변수에 저장하여 출력!

// function getData(){
//     // const data = {'data': 'somedata'}
//     let data
//     setTimeout(() => {
//         console.log('INFO: 요청을 보냈습니다.')
//         data = {'data': 'somedata'}
//     }, 100);
//     return data // undefined
// }

// function printData() {
//     let response1 = getData()
//     console.log(response1)
// }

// printData()

// function getDataCallback(callback){ // 2. callback 으로 함수가 넘어옴 -> callback : 익명 함수
//   setTimeout(()=>{
//     console.log('INFO: 요청을 보냈습니다.')
//     const data = {'data': 'somedata'}
//     callback(data) // 3. 끝난 후 함수를 실행

//     // getDataCallback(function(data2){
//     //   if (data === data2){
//     //     getDataCallback(function)
//     //   }
//     // })
//   }, 100)
// }

// // 1. 출력하는 작업을 하는 함수를 인수로 넘김
// getDataCallback(function(data){
//   console.log(data)
// })

// 1. 다짐을 반환
// 2. 어떤 다짐? ==> 데이터를 요청한 뒤 어떻게 할 것인지
function getDataPromise(){ // === axios.get(DATA_URL)
  return new Promise(resolve => {
    setTimeout(()=>{
      if (true){
        console.log('INFO: 요청을 보냈습니다.')
        const data = {'data': 'somedata'}
        resolve(data) // .then 으로 꺼낼 수 있는 객체
      } else {
        reject('fail!')
      }

    }, 100)
  })
}

// console.log(getDataPromise())
// getDataPromise()
//   .then(response=>{
//     console.log(response)
//     console.log(1)
//     return response.data
//   })
//   .then((data)=>{
//     console.log(2)
//     console.log(data)
//   })
//   .catch(error =>{
//     console.error(error)
//   })

const handleData = async function() { // 비동기적으로 동작하는 함수를 동기적으로 하겠다는 선언
  const response = await getDataPromise() // getDataPromise() 가 올때까지 기다림
  console.log(response)
  // getDataPromise().then(response=>{
  //   console.log(response)
  //   // 이후 작업
  // })
}

handleData()
