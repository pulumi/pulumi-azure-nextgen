// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.V20180419.Outputs
{

    [OutputType]
    public sealed class MySqlConnectionInfoResponse
    {
        /// <summary>
        /// Password credential.
        /// </summary>
        public readonly string? Password;
        /// <summary>
        /// Port for Server
        /// </summary>
        public readonly int Port;
        /// <summary>
        /// Name of the server
        /// </summary>
        public readonly string ServerName;
        /// <summary>
        /// Type of connection info
        /// Expected value is 'MySqlConnectionInfo'.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// User name
        /// </summary>
        public readonly string? UserName;

        [OutputConstructor]
        private MySqlConnectionInfoResponse(
            string? password,

            int port,

            string serverName,

            string type,

            string? userName)
        {
            Password = password;
            Port = port;
            ServerName = serverName;
            Type = type;
            UserName = userName;
        }
    }
}
