import React from 'react';
const TableBody = props => {
  console.log(props);
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td><a className="btn btn-primary" href="javascript:;" onClick={() => props.removeCharacter(index)}>删除</a></td>
      </tr>
    )
  });
  // 函数式组件， 纯函数
  return (
    <tbody>
      {rows}
    </tbody>
  );
// console.log(props.characterData)
//   return (
//     <tbody>
//       {
//         props.characterData.map((item, index) =>
//           <tr key={index}>
//             <td>{item.name}</td>
//             <td>{item.job}</td>
//           </tr>
//         )
//       }
//     </tbody>
//   )
    }
export default TableBody
