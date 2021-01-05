// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DevOps.V20200713Preview.Inputs
{

    /// <summary>
    /// Authorization info used to access a resource (like code repository).
    /// </summary>
    public sealed class AuthorizationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Type of authorization.
        /// </summary>
        [Input("authorizationType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DevOps.V20200713Preview.AuthorizationType> AuthorizationType { get; set; } = null!;

        [Input("parameters")]
        private InputMap<string>? _parameters;

        /// <summary>
        /// Authorization parameters corresponding to the authorization type.
        /// </summary>
        public InputMap<string> Parameters
        {
            get => _parameters ?? (_parameters = new InputMap<string>());
            set => _parameters = value;
        }

        public AuthorizationArgs()
        {
        }
    }
}