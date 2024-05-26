import { useState } from "react";
import { products } from "../../../Data";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./Products.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function UserList() {
  const [productsDatas, setProductsDatas] = useState(products);
  const productsDelete = (productsId) => {
    setProductsDatas(
      productsDatas.filter((product) => product.id != product.Id)
    );
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="Link">
              <div className="userListUser">
                <img src={params.row.avatar} className="userListImg" />
                {params.row.title}
              </div>
            </Link>
          </>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        console.log(params);
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => productsDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={productsDatas}
        columns={columns}
        pageSizeOptions
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 3,
            },
          },
        }}
        disableRowSelectionOnClick
      />
    </div>
  );
}
