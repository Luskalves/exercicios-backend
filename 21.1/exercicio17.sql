select LAST_NAME, HIRE_DATE from hr.employees
where year(HIRE_DATE) = 1987 and month(HIRE_DATE) = 7;	
