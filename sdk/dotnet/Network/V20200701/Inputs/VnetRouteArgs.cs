// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200701.Inputs
{

    /// <summary>
    /// List of routes that control routing from VirtualHub into a virtual network connection.
    /// </summary>
    public sealed class VnetRouteArgs : Pulumi.ResourceArgs
    {
        [Input("staticRoutes")]
        private InputList<Inputs.StaticRouteArgs>? _staticRoutes;

        /// <summary>
        /// List of all Static Routes.
        /// </summary>
        public InputList<Inputs.StaticRouteArgs> StaticRoutes
        {
            get => _staticRoutes ?? (_staticRoutes = new InputList<Inputs.StaticRouteArgs>());
            set => _staticRoutes = value;
        }

        public VnetRouteArgs()
        {
        }
    }
}