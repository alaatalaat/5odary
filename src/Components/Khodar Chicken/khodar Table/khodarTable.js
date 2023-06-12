import DCFSR from '../../Dynamic Comp For Sub Routing/DCFSR';
import { useTranslation } from "react-i18next";

export default function KhodarTable(){
    const [t,i18n] = useTranslation();
    return(
        <>
            <DCFSR title={t("khodarT")} kind="khodarT"/>
        </>
    )
}