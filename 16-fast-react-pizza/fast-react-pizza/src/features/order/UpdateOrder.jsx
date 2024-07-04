import { redirect, useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      {/* <input type="hidden" name="order" value={JSON.stringify(order)} /> */}
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;

export const action = async ({ request, params }) => {
  const data = { priority: true };

  await updateOrder(params.orderId, data);
  return null;
};

// Im just trying
// export const action = async ({ request, params }) => {
//   const formData = await request.formData();
//   const { order } = Object.fromEntries(formData);
//   const priorityOrder = JSON.parse(order);
//   priorityOrder.priority = true;
//   console.log(priorityOrder);

//   await updateOrder(priorityOrder.id, priorityOrder);
//   return redirect(`/order/${priorityOrder.id}`);
// };
