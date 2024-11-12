'use client'
import {useFormStatue} from 'react-dom'
export default function MealsFormSubmit() {
    const {pending} = useFormStatue();
    
    return <button disabled={pending}>{pending ? 'Submitting..' : 'Share Meal'}</button>
}