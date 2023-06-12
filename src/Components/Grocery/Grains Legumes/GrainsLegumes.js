import DCFSR from '../../Dynamic Comp For Sub Routing/DCFSR';
import { useTranslation } from "react-i18next";

export default function GrainsAndLegumes(){
    const [t,i18n] = useTranslation() ;
    return(
        <>
            <DCFSR title={t("grains&legumes")} kind="grains" />
        </>
    )
}