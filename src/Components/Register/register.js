import { useTranslation } from "react-i18next";
import signin from "../../assets/sign-in.png";
import "../Register/register.module.css";
import RegStyle from "../Register/register.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [t, i18n] = useTranslation();

  const { register , formState: { errors }, handleSubmit} = useForm();
  const nav = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:8080/register",data);
    document.getElementsByTagName("form")[0].reset();
    nav("/login")
  }
  var inputs = document.getElementsByTagName("input") ;
  for(let i=0;i<inputs.length;i++ ){
    inputs[i].onfocus = ()=>{
        inputs[i].style.borderRadius ="0px";
    }
    inputs[i].onblur = ()=>{
        inputs[i].style.borderRadius ="0.375rem";
    }
  }

  return (
    <>
      <div className="container py-5" id="register">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h3>
              <b>{t("signup")}</b>
            </h3>
            <form method="post" className={RegStyle.form} onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="my-2">{t("fullName")}</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("name", { required: true })}
                />
                <error>
                  {errors.name?.type === "required" && <span className="text-danger">{t("nameRequired")}</span>}
                </error>
              </div>
              <div>
                <label className="my-2">{t("phoneNum")}</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("phone", { maxLength: 11, minLength: 11 })}
                />
                <error>
                  {errors.phone?.type === "maxLength" &&
                     <span className="text-danger">{t("phoneMaxLen")}</span>}
                  {errors.phone?.type === "minLength" &&
                   <span className="text-danger">{t("phoneMinLen")}</span>}
                </error>
              </div>
              <div>
                <label className="my-2">{t("email")}</label>
                <input
                  type="email"
                  className="form-control"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  })}
                />
                <error>
                  {errors.email?.type === "required" && 
                  <span className="text-danger">{t("emailRequired")}</span>}
                  {errors.email?.type === "pattern" && 
                    <span className="text-danger">{t("emailPattern")}</span>}
                </error>
              </div>
              <div>
                <label className="my-2">{t("password")}</label>
                <input
                  type="password"
                  className="form-control"
                  {...register("password", {required: true,minLength: 6,maxLength: 8})}
                />
                <error>
                  {errors.password?.type === "minLength" && 
                   <span className="text-danger">{t("passwordMinLen")}</span> }
                  {errors.password?.type === "maxLength" &&
                    <span className="text-danger">{t("passwordMaxLen")}</span> }
                </error>
              </div>
              <input
                type="submit"
                className="form-control mt-3"
                value={t("signup")}
              />
            </form>
          </div>
          <div className="col-sm-12 d-none d-md-flex col-md-6 text-center">
            <img src={signin} className="" />
          </div>
        </div>
      </div>
    </>
  );
}
