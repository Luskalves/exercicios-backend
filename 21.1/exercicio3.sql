select JOB_ID, ROUND(avg(SALARY), 2) as `Media Salarial`
from hr.employees
group by JOB_ID
order by `Media Salarial`;