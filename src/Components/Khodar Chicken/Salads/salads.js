import DCFSR from '../../Dynamic Comp For Sub Routing/DCFSR';
import { useTranslation } from "react-i18next";


export default function Salads(){
    const [t,i18n] = useTranslation();
    return(
        <>
            <DCFSR title={t("salads")} kind="salad"/>
        </>
    )
}