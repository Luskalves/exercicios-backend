select JOB_ID, round(avg(SALARY),2)
from hr.employees
where JOB_ID <> 'IT_PROG'
group by JOB_ID;