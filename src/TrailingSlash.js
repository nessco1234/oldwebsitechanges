import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const RemoveTrailingSlash = ({ ...rest }) => {
    const location = useLocation();

    // If the last character of the url is not '/' or the first character is not '/'
    if (!location.pathname.endsWith('/')) {
        return <Navigate replace {...rest} to={{
            pathname: location.pathname + '/',
            search: location.search
        }} />
    } else return null;
}