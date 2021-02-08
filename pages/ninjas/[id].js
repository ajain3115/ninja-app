import React from 'react'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map((ninja) => {
        return {
            params: { id: ninja.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props:{
            ninjaDetail: data
        }
    }

}

function NinjaDetails({ ninjaDetail }) {
    return (
        <div>
            <h1>{ninjaDetail.name}</h1>
            <p> {ninjaDetail.email} </p>
            <p> {ninjaDetail.website} </p>
            <p> {ninjaDetail.company.name} </p> 
            <p> {ninjaDetail.address.city} </p> 
        </div>
    )
}

export default NinjaDetails
