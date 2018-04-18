<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>¡Bienvenido a ApuExpress! - Inicio</title>
        <link rel="icon" href="images/icon.png">
        <link rel="stylesheet" href="css/material-icons.css">
        <link rel="stylesheet" type="text/css" href="css/estilo.css">
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/script.js"></script> 
    </head>

    <body>
        <!-- TOP NAVEGATION BAR -->
        <%@ include file="/html/main/topnav.html" %>
        
        <!-- SIDEBAR -->
        <%@ include file="/html/main/sidebar.jspf" %>
        
    <!-- HEADER -->
    <div id="header"></div>
    <!-- SECTION 1 -->
    <div id="section1">
        <div class="column">
            <div class="banner">
                <a href="#"><img src="images/banner-0.png"></a><br>
            </div>
            <div class="preview">
                <br><img src="images/test.png" alt="test"><br>
                <br><img src="images/test.png" alt="test"><br>
                <br><img src="images/test.png" alt="test"><br>
            </div>
        </div>
        <div class="column">
            <div class="banner">
                <a href="#"><img src="images/banner-1.png"></a><br>
            </div>
            <div class="preview">
                <br><img src="images/test.png" alt="test"><br>
                <br><img src="images/test.png" alt="test"><br>
                <br><img src="images/test.png" alt="test"><br>
            </div>
        </div>
        <div class="column">
            <div class="banner">
                <a href="#"><img src="images/banner-2.png"></a><br>
            </div>    
            <div class="preview">
                <br><img src="images/test.png" alt="test"><br>
                <br><img src="images/test.png" alt="test"><br>
                <br><img src="images/test.png" alt="test"><br>
            </div>
        </div>
    </div>
    <!-- DESCRIPTION 1 -->
    <div class="description">
        <div class="content-container">
            <div class="column-left">
                <a href="#"><img class="banner" src="images/banner-0.png"></a>
                <p> Este es un texto de prueba. Este es un texto de prueba. 
                    Este es un texto de prueba. Este es un texto de prueba.
                    Este es un texto de prueba. Este es un texto de prueba.
                    Este es un texto de prueba. Este es un texto de prueba.
                    Este es un texto de prueba. Este es un texto de prueba.
                    Este es un texto de prueba. Este es un texto de prueba.
                </p>
            </div>
            <div class="column-left">
                <img src="images/test.png" alt="test">
            </div>
        </div>
    </div>
    <!-- DESCRIPTION 2 -->
    <div class="description" style="background-color: rgb(255, 255, 255);">
        <div class="content-container">
            <div class="column-right" >
                <a href="#"><img class="banner" src="images/banner-1.png"></a>
                <p> Este es un texto de prueba. Este es un texto de prueba. 
                    Este es un texto de prueba. Este es un texto de prueba.
                    Este es un texto de prueba. Este es un texto de prueba.
                    Este es un texto de prueba. Este es un texto de prueba.
                    Este es un texto de prueba. Este es un texto de prueba.
                    Este es un texto de prueba. Este es un texto de prueba.
                </p>
            </div>
            <div class="column-right">
                <img src="images/test.png" alt="test">
            </div>
        </div>
    </div> 
    <!-- DESCRIPTION 3 -->
    <div class="description">
        <div class="content-container">
            <div class="column-left">
                <a href="#"><img class="banner" src="images/banner-2.png"></a>
                <p> Este es un texto de prueba. Este es un texto de prueba. 
                    Este es un texto de prueba. Este es un texto de prueba.
                    Este es un texto de prueba. Este es un texto de prueba.
                    Este es un texto de prueba. Este es un texto de prueba.
                    Este es un texto de prueba. Este es un texto de prueba.
                    Este es un texto de prueba. Este es un texto de prueba.
                </p>
            </div>
            <div class="column-left">
                <img src="images/test.png" alt="test">
            </div>
        </div>
    </div>
    <!-- FOOTER -->
    <%@ include file="/html/main/footer.html" %>
    
</body>
</html>
