import DCFSR from '../Dynamic Comp For Sub Routing/DCFSR';
import { useTranslation } from "react-i18next";

export default function Detergents(){
    const [t,i18n] = useTranslation() ;
    return(
        <>
            <div className="container-fluid">
                <div className="row mx-4 my-4">
                    <div className="col-md-3"></div>
                    <div className="col-md-9">
                        <DCFSR title={t("detergents")} kind="detergents" />
                    </div>
                </div>
            </div>
        </>
    )
}

