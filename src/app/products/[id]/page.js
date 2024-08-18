

export async function generateMetadata({ params }) {
    const id = params.id
    return {
      title: `the page id ${id}`,
    }
  }
export default function productsDetails({params}){
    return <h1>productsDetails {params.id}</h1>
}