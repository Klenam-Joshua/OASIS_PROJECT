import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { usePost } from "../hooks/usePost";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import {
  GridRow,
  Table,
  TableHeader,
  Loader,
  Button,
  Row,
  CabinImage,
} from "../ui/CabinElements/CabinElements";

const formater = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "GHC",
});

function Cabins() {
  const { fetchData, deletePost } = usePost();
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm();

  const { isLoading, data: cabins } = useQuery({
    queryKey: ["cabins"],
    queryFn: fetchData,
    onSuccess: (result) => {
      console.log(result, "result");
    },
  });

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("deleted succcessfully");
    },
  });

  return (
    <>
      <Row>
        <h3>All Cabins</h3>
      </Row>
      <Table>
        <TableHeader>
          <div> Cabin image</div>
          <div> name</div>
          <div> maximum quantity</div>
          <div>regular price</div>
          <div>description</div>
        </TableHeader>
        {isLoading && <Loader>fetching data ...</Loader>}
        {cabins &&
          cabins.data.map((cabin, index) => {
            return (
              <GridRow key={index}>
                <div>
                  <CabinImage src={cabin.cabin_image} alt={cabin.cabin_name} />
                </div>
                <div>{cabin.cabin_name}</div>
                <div>{cabin.cabin_maxQuantity}</div>
                <div style={{ fontWeight: "bold" }}>
                  {formater.format(cabin.cabin_regularPrice)}
                </div>
                <div>{cabin.cabin_description}</div>
                <div>
                  <Button onClick={() => mutate(cabin.id)}>delete</Button>
                </div>
              </GridRow>
            );
          })}
        <Toaster />
      </Table>
    </>
  );
}

export default Cabins;
