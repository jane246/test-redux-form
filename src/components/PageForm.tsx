import Form from "./Form";
import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Field } from '../redux/FormSlice';
import { RootState } from "../redux/store";

const PageForm: React.FC = () => {

    const dispatch = useDispatch();
    const status = useSelector((state: RootState) => state.form.status);  
    const [hasError, setHasError] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const inputForm = [
        {name: 'fname', type: 'text', placeholder: 'First Name', empty: 'First Name cannot be empty'},
        {name: 'lname', type: 'text', placeholder: 'Last Name', empty: 'Last Name cannot be empty'},
        {name: 'email', type: 'email', placeholder: 'Email Address', empty: 'Looks like this is not an email'},
        {name: 'password', type: 'password', placeholder: 'Password', empty: 'Password cannot be empty'},
    ];

    useEffect(() => {//จับ status ใส่ใน array
        const results: number[] = [];
        inputForm.forEach((field) => {
            if (status[field.name] === 1||status[field.name] === 0) { results.push(status[field.name]);}
        });
        setHasError(results.length === inputForm.length && !results.includes(0) ? true : false);//ถ้าไม่มี 0 ให้ setHasError(true)
    }, [status]);

    useEffect(() => {//ให้มีแจ้งเตือนเด้งถ้ากดปุ่มส่งแล้วทุกค่าเป็น 1 หรือ false
        if (hasError && !isSubmit) {
            alert("submit success");
            setIsSubmit(true); // ป้องกันการ alert ซ้ำ
            window.location.reload();
        }
    }, [hasError, isSubmit]);

    const handleSubmit = () => {
        inputForm.forEach((field) => {
            const value = (document.getElementsByName(field.name)[0] as HTMLInputElement)?.value;
            dispatch(Field({ field: field.name, value }));
        });
    };

    return(
        <div className="text-center items-center">
            <div className="bg-blue p-3 mb-6 rounded-lg shadow-[0_7px_0px_0px_rgba(0,0,0,0.2)]">
                <p><strong>Try it free 7 days</strong> then $20/mo.thereafter</p>
            </div>
            <div className="bg-white p-6 rounded-lg flex flex-col gap-4 shadow-[0_7px_0px_0px_rgba(0,0,0,0.2)]">
                {inputForm.map((element,index) => (<Form key={index} {...element}/>))}
                <button onClick={handleSubmit} className="bg-green p-3 w-full uppercase rounded-lg border-2 border-emerald-500">claim your free trial</button>
                <p className="text-grayish">By clicking the button. you are agreeing to our <strong className="text-red">Terms and Services</strong></p>
            </div>
        </div>
    )
};
export default PageForm