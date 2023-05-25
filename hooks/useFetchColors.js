/* eslint-disable prettier/prettier */
import { useQuery } from 'react-query';

const useFetchColors = () => {

    const colorsData = useQuery( ['colors'], () => fetch( 'https://color-palette-api.kadikraman.vercel.app/palettes' ).then( res => res.json() ) );
    return colorsData;

};

export default useFetchColors;
