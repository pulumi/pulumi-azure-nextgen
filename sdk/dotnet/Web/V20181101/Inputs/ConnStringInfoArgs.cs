// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20181101.Inputs
{

    /// <summary>
    /// Database connection string information.
    /// </summary>
    public sealed class ConnStringInfoArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Connection string value.
        /// </summary>
        [Input("connectionString")]
        public Input<string>? ConnectionString { get; set; }

        /// <summary>
        /// Name of connection string.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Type of database.
        /// </summary>
        [Input("type")]
        public Input<Pulumi.AzureNextGen.Web.V20181101.ConnectionStringType>? Type { get; set; }

        public ConnStringInfoArgs()
        {
        }
    }
}
