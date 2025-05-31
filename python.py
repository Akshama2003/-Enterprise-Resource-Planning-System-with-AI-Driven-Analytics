import pandas as pd
from sklearn.linear_model import LinearRegression

def predict_demand():
    data = pd.read_sql("SELECT * FROM sales", con=db_engine)
    model = LinearRegression()
    model.fit(data[['historical_data']], data['demand'])
    return model.predict(next_quarter_data)
