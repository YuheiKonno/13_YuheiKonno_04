using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
namespace C_db
{
    #region C_table
    public class C_table
    {
        #region Member Variables
        protected int _id;
        protected string _name;
        protected string _email;
        protected int _height;
        protected int _weight;
        protected string _naiyou;
        protected DateTime _indate;
        #endregion
        #region Constructors
        public C_table() { }
        public C_table(string name, string email, int height, int weight, string naiyou, DateTime indate)
        {
            this._name=name;
            this._email=email;
            this._height=height;
            this._weight=weight;
            this._naiyou=naiyou;
            this._indate=indate;
        }
        #endregion
        #region Public Properties
        public virtual int Id
        {
            get {return _id;}
            set {_id=value;}
        }
        public virtual string Name
        {
            get {return _name;}
            set {_name=value;}
        }
        public virtual string Email
        {
            get {return _email;}
            set {_email=value;}
        }
        public virtual int Height
        {
            get {return _height;}
            set {_height=value;}
        }
        public virtual int Weight
        {
            get {return _weight;}
            set {_weight=value;}
        }
        public virtual string Naiyou
        {
            get {return _naiyou;}
            set {_naiyou=value;}
        }
        public virtual DateTime Indate
        {
            get {return _indate;}
            set {_indate=value;}
        }
        #endregion
    }
    #endregion
}