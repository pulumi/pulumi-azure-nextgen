// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20180601.Inputs
{

    /// <summary>
    /// A WebLinkedService that uses basic authentication to communicate with an HTTP endpoint.
    /// </summary>
    public sealed class WebBasicAuthenticationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Type of authentication used to connect to the web table source.
        /// Expected value is 'Basic'.
        /// </summary>
        [Input("authenticationType", required: true)]
        public Input<string> AuthenticationType { get; set; } = null!;

        /// <summary>
        /// The password for Basic authentication.
        /// </summary>
        [Input("password", required: true)]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs> Password { get; set; } = null!;

        /// <summary>
        /// The URL of the web service endpoint, e.g. http://www.microsoft.com . Type: string (or Expression with resultType string).
        /// </summary>
        [Input("url", required: true)]
        public Input<object> Url { get; set; } = null!;

        /// <summary>
        /// User name for Basic authentication. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("username", required: true)]
        public Input<object> Username { get; set; } = null!;

        public WebBasicAuthenticationArgs()
        {
        }
    }
}
