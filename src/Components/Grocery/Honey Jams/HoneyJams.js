import DCFSR from '../../Dynamic Comp For Sub Routing/DCFSR';
import { useTranslation } from "react-i18next";

export default function HoneyJams(){
    const [t,i18n] = useTranslation() ;
    return(
        <>
            <DCFSR title={t("honey&jams")} kind="honey" />
        </>
    )
}