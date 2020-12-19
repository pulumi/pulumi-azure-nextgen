// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20170901Preview.Outputs
{

    [OutputType]
    public sealed class SecureStringResponse
    {
        /// <summary>
        /// Type of the secret.
        /// Expected value is 'SecureString'.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Value of secure string.
        /// </summary>
        public readonly string Value;

        [OutputConstructor]
        private SecureStringResponse(
            string type,

            string value)
        {
            Type = type;
            Value = value;
        }
    }
}
