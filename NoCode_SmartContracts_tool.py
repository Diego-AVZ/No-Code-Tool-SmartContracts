import tkinter as tk

app = tk.Tk()
app.title("App NoCode Smart Contracts")
app.geometry("1200x650")

code = ""

def add_spdx_pragma():
    global code
    code = "/*SPDX-License-Identifier: MIT*/ pragma solidity ^0.8.0; contract NAMECONTRACT {"

    print("Your contract is " + code)

boton = tk.Button(app, text="Ini Contract", command=add_spdx_pragma)
boton.place(x=100, y=100)

app.mainloop()
