// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataBox.V20180101.Inputs
{

    /// <summary>
    /// DataBoxHeavy Device Job Details
    /// </summary>
    public sealed class DataBoxHeavyJobDetailsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Contact details for notification and shipping.
        /// </summary>
        [Input("contactDetails", required: true)]
        public Input<Inputs.ContactDetailsArgs> ContactDetails { get; set; } = null!;

        [Input("destinationAccountDetails", required: true)]
        private InputList<Union<Inputs.DestinationManagedDiskDetailsArgs, Inputs.DestinationStorageAccountDetailsArgs>>? _destinationAccountDetails;

        /// <summary>
        /// Destination account details.
        /// </summary>
        public InputList<Union<Inputs.DestinationManagedDiskDetailsArgs, Inputs.DestinationStorageAccountDetailsArgs>> DestinationAccountDetails
        {
            get => _destinationAccountDetails ?? (_destinationAccountDetails = new InputList<Union<Inputs.DestinationManagedDiskDetailsArgs, Inputs.DestinationStorageAccountDetailsArgs>>());
            set => _destinationAccountDetails = value;
        }

        /// <summary>
        /// The expected size of the data, which needs to be transferred in this job, in terabytes.
        /// </summary>
        [Input("expectedDataSizeInTeraBytes")]
        public Input<int>? ExpectedDataSizeInTeraBytes { get; set; }

        /// <summary>
        /// Indicates the type of job details.
        /// Expected value is 'DataBoxHeavy'.
        /// </summary>
        [Input("jobDetailsType", required: true)]
        public Input<string> JobDetailsType { get; set; } = null!;

        /// <summary>
        /// Preferences for the order.
        /// </summary>
        [Input("preferences")]
        public Input<Inputs.PreferencesArgs>? Preferences { get; set; }

        /// <summary>
        /// Shipping address of the customer.
        /// </summary>
        [Input("shippingAddress", required: true)]
        public Input<Inputs.ShippingAddressArgs> ShippingAddress { get; set; } = null!;

        public DataBoxHeavyJobDetailsArgs()
        {
        }
    }
}
