import { useTranslation } from "react-i18next";
import DCFSR from "../../Dynamic Comp For Sub Routing/DCFSR";


export default function FreshFruits(){


    const [t,i18n] = useTranslation();

    return(
        <>
           <DCFSR title={t('freshFr')} kind="freshFr"/>
        </>
    )
}