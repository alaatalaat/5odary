import { useTranslation } from 'react-i18next';
import DCFSR from '../../Dynamic Comp For Sub Routing/DCFSR';


export default function FreshHerbsLeaves(){
    const [t,i18n] = useTranslation();
    return ( 
        <>
            <DCFSR title={t("fresh&leaves")} kind="freshLeaves"/>
        </>
    );
}