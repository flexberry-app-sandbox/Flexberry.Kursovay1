﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovay
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Товар.
    /// </summary>
    // *** Start programmer edit section *** (Товар CustomAttributes)

    // *** End programmer edit section *** (Товар CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТоварE", new string[] {
            "КодТовара as \'Код товара\'",
            "Название as \'Название\'",
            "ЕдиницаИзмерения as \'Единица измерения\'",
            "Описание as \'Описание\'",
            "Цена as \'Цена\'"})]
    [View("ТоварL", new string[] {
            "КодТовара as \'Код товара\'",
            "Название as \'Название\'",
            "ЕдиницаИзмерения as \'Единица измерения\'",
            "Описание as \'Описание\'",
            "Цена as \'Цена\'"})]
    public class Товар : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодТовара;
        
        private string fНазвание;
        
        private string fЕдиницаИзмерения;
        
        private string fОписание;
        
        private double fЦена;
        
        // *** Start programmer edit section *** (Товар CustomMembers)

        // *** End programmer edit section *** (Товар CustomMembers)

        
        /// <summary>
        /// ЕдиницаИзмерения.
        /// </summary>
        // *** Start programmer edit section *** (Товар.ЕдиницаИзмерения CustomAttributes)

        // *** End programmer edit section *** (Товар.ЕдиницаИзмерения CustomAttributes)
        [StrLen(255)]
        public virtual string ЕдиницаИзмерения
        {
            get
            {
                // *** Start programmer edit section *** (Товар.ЕдиницаИзмерения Get start)

                // *** End programmer edit section *** (Товар.ЕдиницаИзмерения Get start)
                string result = this.fЕдиницаИзмерения;
                // *** Start programmer edit section *** (Товар.ЕдиницаИзмерения Get end)

                // *** End programmer edit section *** (Товар.ЕдиницаИзмерения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.ЕдиницаИзмерения Set start)

                // *** End programmer edit section *** (Товар.ЕдиницаИзмерения Set start)
                this.fЕдиницаИзмерения = value;
                // *** Start programmer edit section *** (Товар.ЕдиницаИзмерения Set end)

                // *** End programmer edit section *** (Товар.ЕдиницаИзмерения Set end)
            }
        }
        
        /// <summary>
        /// КодТовара.
        /// </summary>
        // *** Start programmer edit section *** (Товар.КодТовара CustomAttributes)

        // *** End programmer edit section *** (Товар.КодТовара CustomAttributes)
        public virtual int КодТовара
        {
            get
            {
                // *** Start programmer edit section *** (Товар.КодТовара Get start)

                // *** End programmer edit section *** (Товар.КодТовара Get start)
                int result = this.fКодТовара;
                // *** Start programmer edit section *** (Товар.КодТовара Get end)

                // *** End programmer edit section *** (Товар.КодТовара Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.КодТовара Set start)

                // *** End programmer edit section *** (Товар.КодТовара Set start)
                this.fКодТовара = value;
                // *** Start programmer edit section *** (Товар.КодТовара Set end)

                // *** End programmer edit section *** (Товар.КодТовара Set end)
            }
        }
        
        /// <summary>
        /// Название.
        /// </summary>
        // *** Start programmer edit section *** (Товар.Название CustomAttributes)

        // *** End programmer edit section *** (Товар.Название CustomAttributes)
        [StrLen(255)]
        public virtual string Название
        {
            get
            {
                // *** Start programmer edit section *** (Товар.Название Get start)

                // *** End programmer edit section *** (Товар.Название Get start)
                string result = this.fНазвание;
                // *** Start programmer edit section *** (Товар.Название Get end)

                // *** End programmer edit section *** (Товар.Название Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.Название Set start)

                // *** End programmer edit section *** (Товар.Название Set start)
                this.fНазвание = value;
                // *** Start programmer edit section *** (Товар.Название Set end)

                // *** End programmer edit section *** (Товар.Название Set end)
            }
        }
        
        /// <summary>
        /// Описание.
        /// </summary>
        // *** Start programmer edit section *** (Товар.Описание CustomAttributes)

        // *** End programmer edit section *** (Товар.Описание CustomAttributes)
        [StrLen(255)]
        public virtual string Описание
        {
            get
            {
                // *** Start programmer edit section *** (Товар.Описание Get start)

                // *** End programmer edit section *** (Товар.Описание Get start)
                string result = this.fОписание;
                // *** Start programmer edit section *** (Товар.Описание Get end)

                // *** End programmer edit section *** (Товар.Описание Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.Описание Set start)

                // *** End programmer edit section *** (Товар.Описание Set start)
                this.fОписание = value;
                // *** Start programmer edit section *** (Товар.Описание Set end)

                // *** End programmer edit section *** (Товар.Описание Set end)
            }
        }
        
        /// <summary>
        /// Цена.
        /// </summary>
        // *** Start programmer edit section *** (Товар.Цена CustomAttributes)

        // *** End programmer edit section *** (Товар.Цена CustomAttributes)
        public virtual double Цена
        {
            get
            {
                // *** Start programmer edit section *** (Товар.Цена Get start)

                // *** End programmer edit section *** (Товар.Цена Get start)
                double result = this.fЦена;
                // *** Start programmer edit section *** (Товар.Цена Get end)

                // *** End programmer edit section *** (Товар.Цена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.Цена Set start)

                // *** End programmer edit section *** (Товар.Цена Set start)
                this.fЦена = value;
                // *** Start programmer edit section *** (Товар.Цена Set end)

                // *** End programmer edit section *** (Товар.Цена Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТоварE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТоварE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТоварE", typeof(IIS.Kursovay.Товар));
                }
            }
            
            /// <summary>
            /// "ТоварL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТоварL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТоварL", typeof(IIS.Kursovay.Товар));
                }
            }
        }
    }
}
