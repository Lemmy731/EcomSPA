import axios from "axios";

export async function cartAdd(productId: string, quantity:number) {
    try {
    await axios.post(
      "https://localhost:44338/api/Cart/add",
      {
        productId,
        quantity
      },
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    console.error("Error occurred while adding to cart:", error);
  }
}

export async function cartUpdate(productId: string) {
    try
    {
        const res = await axios.put(
        "https://localhost:44338/api/Cart/update",
    {
      productId
    },
    {
        withCredentials: true, 
    }
    );
    }catch(error)
    {
        console.error("error occurred")
    }
}

export async function cartRemove(productId: string) {
    try{
        await axios.delete(
    `https://localhost:44338/api/Cart/delete/${productId}`,
    {
      withCredentials: true,
    }
  );
    }catch(error){
        console.error("error occurred")
    } 
}