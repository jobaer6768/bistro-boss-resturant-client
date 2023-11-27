import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const Cart = () => {

    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Cart</title>
            </Helmet>
            <div className="flex justify-evenly p-12">
                <p className="text-4xl uppercase font-bold">Total Orders: {cart.length}</p>
                <p className="text-4xl uppercase font-bold">Total Price: ${totalPrice}</p>
                <button className="btn btn-warning font-bold text-white">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, idx) =>
                                <tr key={item._id}>
                                    <td className="font-semibold">{idx + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-gray-600">
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div >
        </>
    );
};

export default Cart;