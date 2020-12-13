// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Logic.V20190501.Inputs
{

    /// <summary>
    /// The X12 envelope override settings.
    /// </summary>
    public sealed class X12EnvelopeOverrideArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The date format.
        /// </summary>
        [Input("dateFormat", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Logic.V20190501.X12DateFormat> DateFormat { get; set; } = null!;

        /// <summary>
        /// The functional identifier code.
        /// </summary>
        [Input("functionalIdentifierCode")]
        public Input<string>? FunctionalIdentifierCode { get; set; }

        /// <summary>
        /// The header version.
        /// </summary>
        [Input("headerVersion", required: true)]
        public Input<string> HeaderVersion { get; set; } = null!;

        /// <summary>
        /// The message id on which this envelope settings has to be applied.
        /// </summary>
        [Input("messageId", required: true)]
        public Input<string> MessageId { get; set; } = null!;

        /// <summary>
        /// The protocol version on which this envelope settings has to be applied.
        /// </summary>
        [Input("protocolVersion", required: true)]
        public Input<string> ProtocolVersion { get; set; } = null!;

        /// <summary>
        /// The receiver application id.
        /// </summary>
        [Input("receiverApplicationId", required: true)]
        public Input<string> ReceiverApplicationId { get; set; } = null!;

        /// <summary>
        /// The responsible agency code.
        /// </summary>
        [Input("responsibleAgencyCode", required: true)]
        public Input<string> ResponsibleAgencyCode { get; set; } = null!;

        /// <summary>
        /// The sender application id.
        /// </summary>
        [Input("senderApplicationId", required: true)]
        public Input<string> SenderApplicationId { get; set; } = null!;

        /// <summary>
        /// The target namespace on which this envelope settings has to be applied.
        /// </summary>
        [Input("targetNamespace", required: true)]
        public Input<string> TargetNamespace { get; set; } = null!;

        /// <summary>
        /// The time format.
        /// </summary>
        [Input("timeFormat", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Logic.V20190501.X12TimeFormat> TimeFormat { get; set; } = null!;

        public X12EnvelopeOverrideArgs()
        {
        }
    }
}
