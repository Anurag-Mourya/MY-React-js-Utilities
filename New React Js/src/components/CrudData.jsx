import React from 'react'

function CrudData({allDatas}) {
  const deleteData = (val) =>{
  
  }
  return (
    <div>
      <table className='table max-w-[1240px] mx-auto text-center table-bordered'>
       
          <thead>
          <tr>
            <td>S.No.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
            </tr>
          </thead>
       
        <tbody>
          {allDatas.map((val,index)=>{
            return(
              <tr>
                <td>
                  {index}
                </td>
                <td>
                  {val.names}

                </td>
                <td>
                  {val.emails}
                </td>
                <td>
                  {val.addresses}
                </td>
                <td>
                  <button className='' onClick={()=>deleteData(val)}>Delete</button>
                </td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
    </div>
  )
}

export default CrudData