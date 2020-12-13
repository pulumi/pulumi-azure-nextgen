// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cdn.V20161002.Inputs
{

    /// <summary>
    /// Rules defining user geo access within a CDN endpoint.
    /// </summary>
    public sealed class GeoFilterArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Action of the geo filter, i.e. allow or block access.
        /// </summary>
        [Input("action", required: true)]
        public Input<Pulumi.AzureNextGen.Cdn.V20161002.GeoFilterActions> Action { get; set; } = null!;

        [Input("countryCodes", required: true)]
        private InputList<string>? _countryCodes;

        /// <summary>
        /// Two letter country codes defining user country access in a geo filter, e.g. AU, MX, US.
        /// </summary>
        public InputList<string> CountryCodes
        {
            get => _countryCodes ?? (_countryCodes = new InputList<string>());
            set => _countryCodes = value;
        }

        /// <summary>
        /// Relative path applicable to geo filter. (e.g. '/mypictures', '/mypicture/kitty.jpg', and etc.)
        /// </summary>
        [Input("relativePath", required: true)]
        public Input<string> RelativePath { get; set; } = null!;

        public GeoFilterArgs()
        {
        }
    }
}
