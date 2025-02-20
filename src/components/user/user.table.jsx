// import {
//   DeleteColumnOutlined,
//   DeleteOutlined,
//   EditOutlined,
// } from "@ant-design/icons";
// import { notification, Popconfirm, Table } from "antd";
// import UpdateUserModal from "./update.user.modal";
// import { useState } from "react";
// import ViewUserDetail from "./view.user.detail";
// import { deleteUserAPI } from "../../services/api.service";

// const UserTable = (props) => {
//   const {
//     dataUsers,
//     loadUser,
//     current,
//     pageSize,
//     total,
//     setCurrent,
//     setPageSize,
//   } = props;

//   const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
//   const [dataUpdate, setDataUpdate] = useState(null);

//   const [dataDetail, setDataDetail] = useState(null);
//   const [isDetailOpen, setIsDetailOpen] = useState(false);

//   const handleDeleteUser = async (id) => {
//     const res = await deleteUserAPI(id);
//     if (res.data) {
//       notification.success({
//         message: "Delete user",
//         description: "Xoa user thanh cong",
//       });
//       await loadUser();
//     } else {
//       notification.error({
//         message: "Error delete user",
//         description: JSON.stringify(res.message),
//       });
//     }
//   };

//   const columns = [
//     {
//       title: "STT",
//       render: (_, record, index) => {
//         return <>{index + 1 + (current - 1) * pageSize}</>;
//       },
//     },
//     {
//       title: "Id",
//       dataIndex: "_id",
//       render: (_, record) => {
//         return (
//           <a
//             href="#"
//             onClick={() => {
//               setDataDetail(record);
//               setIsDetailOpen(true);
//             }}
//           >
//             {record._id}
//           </a>
//         );
//       },
//     },
//     {
//       title: "Full Name",
//       dataIndex: "fullName",
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (_, record) => (
//         <div style={{ display: "flex", gap: "20px" }}>
//           <EditOutlined
//             onClick={() => {
//               setDataUpdate(record);
//               setIsModalUpdateOpen(true);
//             }}
//             style={{ cursor: "pointer", color: "orange" }}
//           />
//           <DeleteColumnOutlined style={{ cursor: "pointer", color: "red" }} />

//           <Popconfirm
//             title="Xoa nguoi dung"
//             description="ban co chac xoa user nay?"
//             onConfirm={() => handleDeleteUser(record._id)}
//             okText="Yes"
//             cancelText="No"
//             placement="left"
//           >
//             <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
//           </Popconfirm>
//         </div>
//       ),
//     },
//   ];

//   const onChange = (pagination, filters, sorter, extra) => {
//     // nếu thay đổi trang : current
//     if (pagination && pagination.current) {
//       if (+pagination.current !== +current) {
//         setCurrent(+pagination.current); // dấu + giúp convert từ string qua số nguyên "5" => 5
//       }
//     }

//     // nếu thay đổi tổng số phần tử : pageSize
//     if (pagination && pagination.pageSize) {
//       if (+pagination.current !== +pageSize) {
//         setPageSize(+pagination.pageSize);
//       }
//     }
//   };

//   return (
//     <>
//       {/* do id trong db la _id */}
//       <Table
//         columns={columns}
//         dataSource={dataUsers}
//         rowKey={"_id"}
//         pagination={{
//           current: current, //đang ở trang bao nhiêu
//           pageSize: pageSize, // muốn bao nhiêu phần tử trên 1 trang
//           showSizeChanger: true,
//           total: total,
//           showTotal: (total, range) => {
//             return (
//               <div>
//                 {" "}
//                 {range[0]}-{range[1]} trên {total} rows
//               </div>
//             );
//           },
//         }}
//         onChange={onChange}
//       />
//       <UpdateUserModal
//         isModalUpdateOpen={isModalUpdateOpen}
//         setIsModalUpdateOpen={setIsModalUpdateOpen}
//         dataUpdate={dataUpdate}
//         setDataUpdate={setDataUpdate}
//         loadUser={loadUser}
//       />

//       <ViewUserDetail
//         dataDetail={dataDetail}
//         setDataDetail={setDataDetail}
//         isDetailOpen={isDetailOpen}
//         setIsDetailOpen={setIsDetailOpen}
//         loadUser={loadUser}
//       />
//     </>
//   );
// };

// export default UserTable;
