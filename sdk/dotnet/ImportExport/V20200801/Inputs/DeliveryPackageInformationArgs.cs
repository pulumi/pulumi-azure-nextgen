// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ImportExport.V20200801.Inputs
{

    /// <summary>
    /// Contains information about the delivery package being shipped by the customer to the Microsoft data center.
    /// </summary>
    public sealed class DeliveryPackageInformationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the carrier that is used to ship the import or export drives.
        /// </summary>
        [Input("carrierName", required: true)]
        public Input<string> CarrierName { get; set; } = null!;

        /// <summary>
        /// The number of drives included in the package.
        /// </summary>
        [Input("driveCount")]
        public Input<int>? DriveCount { get; set; }

        /// <summary>
        /// The date when the package is shipped.
        /// </summary>
        [Input("shipDate")]
        public Input<string>? ShipDate { get; set; }

        /// <summary>
        /// The tracking number of the package.
        /// </summary>
        [Input("trackingNumber", required: true)]
        public Input<string> TrackingNumber { get; set; } = null!;

        public DeliveryPackageInformationArgs()
        {
        }
    }
}
