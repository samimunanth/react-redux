import React from "react";

class Footer extends React.Component{

    render(props){
        const userdata=this.props;
        console.log(userdata);
        return(
            <>
            <footer class="main-footer">
            <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
            All rights reserved.
            <div class="float-right d-none d-sm-inline-block">
            <b>Version</b> 3.0.5
            </div>
        </footer>
            </>
        )
    }
}

export default Footer;