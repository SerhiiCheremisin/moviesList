import React from 'react';
import { AppDispatch } from '../../redux/reduxStore';
import { useDispatch } from 'react-redux';

const useCommonDispatch = () => {
 const dispatch: AppDispatch = useDispatch();

  return dispatch;
}

export default useCommonDispatch;
