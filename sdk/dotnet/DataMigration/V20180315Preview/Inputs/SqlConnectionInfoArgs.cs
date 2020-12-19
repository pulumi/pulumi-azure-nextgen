// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.V20180315Preview.Inputs
{

    /// <summary>
    /// Information for connecting to SQL database server
    /// </summary>
    public sealed class SqlConnectionInfoArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Additional connection settings
        /// </summary>
        [Input("additionalSettings")]
        public Input<string>? AdditionalSettings { get; set; }

        /// <summary>
        /// Authentication type to use for connection
        /// </summary>
        [Input("authentication")]
        public InputUnion<string, Pulumi.AzureNextGen.DataMigration.V20180315Preview.AuthenticationType>? Authentication { get; set; }

        /// <summary>
        /// Data source in the format Protocol:MachineName\SQLServerInstanceName,PortNumber
        /// </summary>
        [Input("dataSource", required: true)]
        public Input<string> DataSource { get; set; } = null!;

        /// <summary>
        /// Whether to encrypt the connection
        /// </summary>
        [Input("encryptConnection")]
        public Input<bool>? EncryptConnection { get; set; }

        /// <summary>
        /// Password credential.
        /// </summary>
        [Input("password")]
        public Input<string>? Password { get; set; }

        /// <summary>
        /// Whether to trust the server certificate
        /// </summary>
        [Input("trustServerCertificate")]
        public Input<bool>? TrustServerCertificate { get; set; }

        /// <summary>
        /// Type of connection info
        /// Expected value is 'SqlConnectionInfo'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        /// <summary>
        /// User name
        /// </summary>
        [Input("userName")]
        public Input<string>? UserName { get; set; }

        public SqlConnectionInfoArgs()
        {
        }
    }
}
