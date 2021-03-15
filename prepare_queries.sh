# Concatenate files in the queries folder to assets/queries.rq
sed -s '$a---' queries/*.rq | head -n -1 > assets/queries.rq