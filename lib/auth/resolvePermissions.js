'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var resolvePermission = exports.resolvePermission = function resolvePermission(_ref) {
    var permissions = _ref.permissions,
        record = _ref.record,
        resource = _ref.resource;
    return function (mapping) {
        if (typeof mapping.resolve === 'function') {
            var result = mapping.resolve({
                record: record,
                resource: resource,
                permissions: permissions,
                exact: mapping.exact,
                value: mapping.permissions
            });

            if (typeof result.then === 'function') {
                return result.then(function (matched) {
                    return { matched: matched, view: mapping.view };
                });
            }

            return Promise.resolve({ matched: result, view: mapping.view });
        }

        if (Array.isArray(mapping.permissions) && Array.isArray(permissions)) {
            if (mapping.exact) {
                return Promise.resolve({
                    matched: mapping.permissions.every(function (mp) {
                        return permissions.includes(mp);
                    }),
                    view: mapping.view
                });
            }

            return Promise.resolve({
                matched: mapping.permissions.some(function (mp) {
                    return permissions.includes(mp);
                }),
                view: mapping.view
            });
        }

        if (Array.isArray(mapping.permissions)) {
            return Promise.resolve({
                matched: mapping.permissions.includes(permissions),
                view: mapping.view
            });
        }

        if (Array.isArray(permissions)) {
            return Promise.resolve({
                matched: permissions.includes(mapping.permissions),
                view: mapping.view
            });
        }

        return Promise.resolve({
            matched: mapping.permissions === permissions,
            view: mapping.view
        });
    };
};

exports.default = function (_ref2) {
    var mappings = _ref2.mappings,
        permissions = _ref2.permissions,
        record = _ref2.record,
        resource = _ref2.resource;

    var promise = resolvePermission({ permissions: permissions, record: record, resource: resource });
    return Promise.all(mappings.map(promise)).then(function (matchers) {
        return matchers.find(function (match) {
            return match.matched;
        });
    });
};