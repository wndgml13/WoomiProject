import styled from "styled-components";



export default function PostsColumn() {
  
 

  return (
    
  <Post_Form>
          <Post_Label>ID</Post_Label>
          <Post_Label>유형</Post_Label>
          <Post_Label>제목</Post_Label>
          <Post_Label>작성자</Post_Label>
          <Post_Label>날짜</Post_Label>
      </Post_Form>

    
  );
}


const Post_Form = styled.div`
  width: 69%;
  margin: 0 auto;
  text-align: center;
  border-spacing: 0;
  justify-content: space-around;
  background-color:#58bfc1;
  border-radius: 10px;
  display: flex;
  border-bottom: 2px solid #e8e8e8;
  padding: 10px 5px;
`;

const Post_Label = styled.label`
font-size: 16px;
font-weight: bold;
// font-family: 'Patua One', cursive;
color:#fff;
font-style: italic;
`;

<p class="fw-bolder">Bolder weight text (relative to the parent element).</p>


// <Post_Form>
//           <Post_Label>ID</Post_Label>
//           <Post_Label>유형</Post_Label>
//           <Post_Label>제목</Post_Label>
//           <Post_Label>작성자</Post_Label>
//           <Post_Label>날짜</Post_Label>
//       </Post_Form>



  


// body{
//   background-color: #bdc3c7;
// }
// .table-fixed{
//   width: 100%;
//   background-color: #f3f3f3;
//   tbody{
//     height:200px;
//     overflow-y:auto;
//     width: 100%;
//     }
//   thead,tbody,tr,td,th{
//     display:block;
//   }
//   tbody{
//     td{
//       float:left;
//     }
//   }
//   thead {
//     tr{
//       th{
//         float:left;
//        background-color: #f39c12;
//        border-color:#e67e22;
//       }
//     }
//   }
// }