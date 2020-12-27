<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	
	<!-- Example of directive import -->
	<%@ page import="java.util.Date" %>
	
	<!-- Example of declaration -->
	<%! Date now; %>
	
	<!-- Example of scriptlet -->
	<%
		for(int i=1;i<6;i++) { %>
			<h<%=i%>>The font size is <%=i%> </h<%=i%>>
			<br>
			<%
		}
	%>
	
	<% now = new Date(); %>
	<% SimpleDateFormat f = new SimpleDateFormat("dd/MM/yyyy"); %>
	<% out.print(f.format(now)); %>
	
</body>
</html>